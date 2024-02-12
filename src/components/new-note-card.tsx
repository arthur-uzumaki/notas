'use client'
import { ChangeEvent, FormEvent, useState } from "react"
import { Textarea } from "./ui/textarea"
import { toast } from 'sonner'

import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTrigger } from "./ui/dialog"
interface NewNoteCardProps {
  onNoteCreated: (content: string) => void
}

let speechRecognition: SpeechRecognition | null = null
export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState<boolean>(true)
  const [content, setContent] = useState<string>('')
  const [isRecording, setIsRecording] = useState<boolean>(false)

  function handleStartEditor() {
    setShouldShowOnboarding(false)
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)
    if (!event.target.value) {
      setShouldShowOnboarding(true)
    }

  }

  function handleSalveNote(event: FormEvent) {
    event.preventDefault()

    if (content === '') {
      return
    }
    onNoteCreated(content)

    setContent('')
    setShouldShowOnboarding(true)
    toast.success('Nota criado com sucesso!')

  }

  function handleStartRecoding() {


    const isSpeechRecognitionAPIAvailable = 'SpeechRecognition' in window
      || 'webkitSpeechRecognition' in window

    if (!isSpeechRecognitionAPIAvailable) {
      alert('Infelizmente seu navegador não suporta a API de gravação!')
      return
    }

    setIsRecording(true)
    setShouldShowOnboarding(false)

    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition

    speechRecognition = new SpeechRecognitionAPI()

    speechRecognition.lang = 'pt-BR'
    speechRecognition.continuous = true
    speechRecognition.maxAlternatives = 1
    speechRecognition.interimResults = true

    speechRecognition.onresult = (event => {
      const transcription = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript)
      }, '')

      setContent(transcription)
    })

    speechRecognition.onerror = (event => {
      console.error(event);

    })

    speechRecognition.start()
  }

  function handleStopRecoding() {

    setIsRecording(false)

    if (speechRecognition !== null) {
      speechRecognition.stop()
    }
  }

  return (
    <Dialog>
      <DialogTrigger className='rounded-md bg-slate-700 flex flex-col gap-3 p-5 text-left overflow-hidden relative transition-all duration-300 hover:scale-105 cursor-pointer outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 '>
        <span className='text-sm font-medium text-slate-200'>
          Adicionar nota
        </span>

        <p className='text-sm leading-6 text-slate-400'>
          Grave uma nota em áudio que será convertida para texto automaticamente.
        </p>

      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="bg-black/50 " />
        <DialogContent className=" overflow-hidden  inset-0 md:inset-autos md:max-w-[640px] w-full md:h-[60vh]
           bg-slate-700 md:rounded-md flex flex-col outline-none">
          <form className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5 ">
              <span className='text-sm font-medium text-slate-300'>
                Adicionar nota
              </span>

              {shouldShowOnboarding ? (
                <p className='text-sm leading-6 text-slate-400'>
                  Comece <button type="button" onClick={handleStartRecoding} className="font-medium text-lime-400 hover:underline transition-all"> gravando uma nota</button> em áudio ou ser preferir
                  <button type="button" onClick={handleStartEditor} className="font-medium text-lime-400 hover:underline transition-all">utilizer apenas texto</button>
                </p>
              ) : (
                <Textarea className="flex-1 resize-none outline-none text-sm leading-6 "
                  onChange={handleContentChanged}
                  value={content}
                />
              )}
            </div>

            {isRecording ? (
              <button type="button"
                onClick={handleStopRecoding}
                className="-w-full bg-slate-900 py-4 text-center outline-none text-sm
                          text-slate-300 hover:text-slate-100 transition-all font-medium
                          flex items-center gap-2 justify-center
                          "
              >
                <div className="size-3 rounded-full bg-red-500 animate-pulse" />
                Gravando! (Clique p/ interromper)
              </button>
            ) : (
              <button type="button"
                onClick={handleSalveNote}
                className="-w-full bg-lime-400 py-4 text-center outline-none text-sm
                        text-lime-950 hover:bg-lime-500 transition-all font-medium "
              >
                Salvar nota
              </button>
            )}


          </form>

        </DialogContent>

      </DialogPortal>
    </Dialog>
  )
}