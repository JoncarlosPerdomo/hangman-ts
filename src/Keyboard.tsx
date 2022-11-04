const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export function Keyboard({ disabled = false, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {
  return (
    <div className='grid grid-cols-5 gap-2 md:grid-cols-10'>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`aspect-square w-full cursor-pointer border-4 border-black p-2 text-4xl font-bold uppercase text-black enabled:hover:bg-sky-400 enabled:focus:bg-sky-400
            ${isActive && 'bg-sky-400 text-white'}
            ${isInactive && 'opacity-30'}`}
            disabled={isActive || isInactive || disabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
