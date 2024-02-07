
export function NoteCard() {
  return (
    <button className='rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative transition-all duration-300 hover:scale-105 cursor-pointer outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400  '>
      <span className='text-sm font-medium text-slate-300'>
        Há 2 dias
      </span>

      <p className='text-sm leading-6 text-slate-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit, minima tenetur nesciunt dignissimos maiores, provident, et quo cupiditate expedita quisquam harum ducimus porro pariatur exercitationem minus reprehenderit iste. Voluptatem?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga nam nihil unde repellendus earum? Sit minus error et? Maiores molestiae ad, ullam modi excepturi error ipsam fugit blanditiis fuga?
      </p>
      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />

    </button>
  )
}