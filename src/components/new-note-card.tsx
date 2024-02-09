
import { FormNote } from "./form-note"
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTrigger } from "./ui/dialog"

export function NewNoteCard() {


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
        <DialogContent className=" overflow-hidden  max-w-[640px] w-full h-[60vh]
           bg-slate-700 rounded-md flex flex-col outline-none">
          <FormNote />

        </DialogContent>

      </DialogPortal>
    </Dialog>
  )
}