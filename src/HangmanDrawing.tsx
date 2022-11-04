const HEAD = <div className='absolute top-11 right-2 h-14 w-14 rounded-full border-8 border-black' />

const BODY = <div className='absolute top-24 right-8 h-24 w-2.5 bg-black' />

const RIGHT_ARM = (
  <div className='absolute top-36 -right-16 h-2.5 w-24 origin-bottom-left -rotate-45 transform bg-black' />
)

const LEFT_ARM = (
  <div className='absolute top-36 right-10 h-2.5 w-24 origin-bottom-right rotate-45 transform bg-black' />
)

const RIGHT_LEG = (
  <div className='absolute top-44 -right-[3.4rem] h-2.5 w-24 origin-bottom-left rotate-[60deg] transform bg-black' />
)

const LEFT_LEG = (
  <div className='absolute top-44 right-8 h-2.5 w-24 origin-bottom-right -rotate-[60deg] transform bg-black' />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HandmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HandmanDrawingProps) {
  return (
    <div className='relative'>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className='absolute top-0 right-8 h-12 w-2.5 bg-black' />
      <div className='ml-24 h-2.5 w-24 bg-black' />
      <div className='ml-24 h-96 w-2.5 bg-black' />
      <div className='h-2.5 w-56 bg-black' />
    </div>
  )
}
