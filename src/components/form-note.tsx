'use client'
import { ChangeEvent, FormEvent, useState } from "react"
import { Textarea } from "./ui/textarea"
import { toast } from 'sonner'


export function FormNote(){
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState<boolean>(true)
  const [content , setContent] = useState<string>('')

  function handleStartEditor() {
    setShouldShowOnboarding(false)
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)
    if (!event.target.value) {
      setShouldShowOnboarding(true)
    }

  }

  function handleSalveNote(event:FormEvent){
    event.preventDefault()
    toast.success('Nota criado com sucesso!')
    
  }
    return(
      <form className="flex-1 flex flex-col" onSubmit={handleSalveNote}>
      <div className="flex flex-1 flex-col gap-3 p-5 ">
        <span className='text-sm font-medium text-slate-300'>
          Adicionar nota
        </span>

        {shouldShowOnboarding ? (
          <p className='text-sm leading-6 text-slate-400'>
            Comece <button className="font-medium text-lime-400 hover:underline transition-all"> gravando uma nota</button> em áudio ou ser preferir <button onClick={handleStartEditor} className="font-medium text-lime-400 hover:underline transition-all">utilizer apenas texto</button>
          </p>
        ) : (
          <Textarea className="flex-1 resize-none outline-none text-sm leading-6 " onChange={handleContentChanged} />
        )}
      </div>

      <button type="submit"
        className="-w-full bg-lime-400 py-4 text-center outline-none text-sm
       text-lime-950 hover:bg-lime-500 transition-all font-medium "
      >
        Salvar nota
      </button>
    </form>
    )
}