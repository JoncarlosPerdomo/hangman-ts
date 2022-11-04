import { useCallback, useEffect, useState } from 'react'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import './index.css'
import { Keyboard } from './Keyboard'
import words from './wordList.json'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}
function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return

      setGuessedLetters((currentLetters) => [...currentLetters, letter])
    },
    [guessedLetters, isWinner, isLoser],
  )

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key
      if (!key.match(/^[a-z]$/)) return

      event.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener('keypress', handler)
    return () => document.removeEventListener('keypress', handler)
  }, [guessedLetters])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key
      if (key !== 'Enter') return

      event.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }
    document.addEventListener('keypress', handler)
    return () => document.removeEventListener('keypress', handler)
  }, [])
  return (
    <div className=' mx-auto flex max-w-3xl flex-col items-center gap-8'>
      <div className='text-center text-3xl'>
        {isWinner && 'Winner! - Refresh to try again'}
        {isLoser && 'Loser! - Refresh to try again'}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <Keyboard
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  )
}

export default App
