'use client'

import logo from '@/assets/logo.svg'
import { NewNoteCard } from '@/components/new-note-card';
import { NoteCard } from '@/components/note-card';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

interface Note {
  id: string,
  date: Date,
  content: string
}

export default function Home() {
  const [search, setSearch] = useState<string>('')
  const [note, setNote] = useState<Note[]>(() => {

    const notesOnStore = localStorage.getItem('note')
    if (notesOnStore) {
      return JSON.parse(notesOnStore)
    }

    return []
  })
  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    const notesArray = [newNote, ...note]

    setNote(notesArray)
    localStorage.setItem('note', JSON.stringify(notesArray))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  function onNoteDelete(id: string){
    const notesArray = note.filter(item => item.id !== id)

    setNote(notesArray)

    localStorage.setItem('note', JSON.stringify(notesArray))

  }


  const filterNotes = search !== '' ?
    note.filter((item) => item.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : note


  return (
    <main className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <Image src={logo} alt='NLW Expert' />

      <form className='w-full ' >
        <input
          placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500  '
          onChange={handleSearch}
        />
      </form>
      <div className='h-px bg-slate-700' />

      <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-3 auto-rows-[250px] gap-6'>
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filterNotes.map(item => {
          return (
            <NoteCard key={item.id} note={item} onNoteDelete={onNoteDelete} />
          )
        })}


      </div>
    </main>
  );
}
