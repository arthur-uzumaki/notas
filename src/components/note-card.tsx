
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogTrigger } from "./ui/dialog"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
interface NoteCardProps {
  note: {
    date: Date
    content: string
  }
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Dialog>
      <DialogTrigger  className='rounded-md text-left flex flex-col gap-3 bg-slate-800 p-5  overflow-hidden relative transition-all duration-300 hover:scale-105 cursor-pointer outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400  '>
        <span className='text-sm font-medium text-slate-300'>
          {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
        </span>

        <p className='text-sm leading-6 text-slate-400'>
          {note.content}
        </p>
        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t
         from-black/60 to-black/0 pointer-events-none' />
       

        <DialogPortal>
          <DialogOverlay className="bg-black/50 " />
          <DialogContent className=" overflow-hidden  max-w-[640px] w-full h-[60vh]
           bg-slate-700 rounded-md flex flex-col outline-none">
         

            <div className="flex flex-1 flex-col gap-3 p-5 ">
              <span className='text-sm font-medium text-slate-300'>
                {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
              </span>

              <p className='text-sm leading-6 text-slate-400'>
                {note.content}
              </p>
            </div>

            <button type="button"
              className="-w-full bg-slate-800 py-4 text-center outline-none text-sm
             text-slate-300 hover:bg-slate-600 transition-all font-medium group"
            >
              Deseja <strong className="text-red-400 group-hover:underline"> apagar essa nota</strong>?
            </button>
          </DialogContent>

        </DialogPortal>
      </DialogTrigger>
    </Dialog>
  )
}