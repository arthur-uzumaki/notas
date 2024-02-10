'use client'

import logo from '@/assets/logo.svg'
import { NewNoteCard } from '@/components/new-note-card';
import { NoteCard } from '@/components/note-card';
import Image from 'next/image';
import { useState } from 'react';

interface Note {
  id: string,
  date: Date,
  content: string
}

export default function Home() {
  const [note, setNote] = useState<Note[]>([])


  function onNoteCreated(content: string){
    const newNote = {
      id:crypto.randomUUID(),
      date: new Date(),
      content
    }

    setNote([newNote , ...note])
  }
  return (
    <main className="mx-auto max-w-6xl my-12 space-y-6">
      <Image src={logo} alt='NLW Expert' />

      <form className='w-full ' >
        <input
          placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500  '
        />
      </form>
      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
        <NewNoteCard onNoteCreated={onNoteCreated}/>

        {note.map(item => {
          return (
            <NoteCard key={item.id} note={item} />
          )
        })}


      </div>
    </main>
  );
}
