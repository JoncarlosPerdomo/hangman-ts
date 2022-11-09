const FIRST_ROW = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
const SECOND_ROW = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
const THIRD_ROW = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export function Keyboard({ disabled = false, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {
  return (
    <div>
      <div className='flex'>
        {FIRST_ROW.map((key) => {
          const isActive = activeLetters.includes(key)
          const isInactive = inactiveLetters.includes(key)
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`m-1 aspect-square w-full flex-auto cursor-pointer border-4 border-black font-bold uppercase text-black enabled:hover:bg-sky-400 enabled:focus:bg-sky-400 md:text-4xl
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
      <div className='flex px-6'>
        {SECOND_ROW.map((key) => {
          const isActive = activeLetters.includes(key)
          const isInactive = inactiveLetters.includes(key)
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`m-1 aspect-square flex-auto cursor-pointer border-4 border-black font-bold uppercase text-black enabled:hover:bg-sky-400 enabled:focus:bg-sky-400 md:text-4xl
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
      <div className='flex px-12'>
        {THIRD_ROW.map((key) => {
          const isActive = activeLetters.includes(key)
          const isInactive = inactiveLetters.includes(key)
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`m-1 aspect-square w-full flex-1 cursor-pointer border-4 border-black font-bold uppercase text-black enabled:hover:bg-sky-400 enabled:focus:bg-sky-400 md:text-4xl
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
    </div>
  )
}
