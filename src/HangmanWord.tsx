type HangmanWordProps = {
  reveal?: boolean
  guessedLetters: string[]
  wordToGuess: string
}

export function HangmanWord({ reveal = false, guessedLetters, wordToGuess }: HangmanWordProps) {
  return (
    <div className='flex gap-1 font-mono text-6xl font-bold uppercase'>
      {wordToGuess.split('').map((letter, index) => (
        <span className='border-b-8 border-black' key={index}>
          <span
            className={`${guessedLetters.includes(letter) || reveal ? 'visible' : 'invisible'} ${
              !guessedLetters.includes(letter) && reveal ? 'text-red-600' : 'text-black'
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}
