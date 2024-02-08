
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogTrigger } from "./ui/dialog"


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


          <div className="flex flex-1 flex-col gap-3 p-5 ">
            <span className='text-sm font-medium text-slate-300'>
              Adicionar nota
            </span>

            <p className='text-sm leading-6 text-slate-400'>
              Comece <button className="font-medium text-lime-400 hover:underline transition-all"> gravando uma nota</button> em áudio ou ser preferir <button className="font-medium text-lime-400 hover:underline transition-all">utilizer apenas texto</button>
            </p>
          </div>

          <button type="button"
            className="-w-full bg-lime-400 py-4 text-center outline-none text-sm
             text-lime-950 hover:bg-lime-500 transition-all font-medium "
          >
            Salvar nota
          </button>
        </DialogContent>

      </DialogPortal>
    </Dialog>
  )
}