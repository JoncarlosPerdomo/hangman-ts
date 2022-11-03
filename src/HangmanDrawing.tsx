const HEAD = (
  <div className="h-14 w-14 rounded-full border-8 border-black absolute top-11 -right-6"/>
)

const BODY = (
  <div className="h-24 w-2.5 bg-black absolute top-24 right-0"/>
)

const RIGHT_ARM = (
  <div className="h-2.5 w-24 bg-black top-36 -right-24 absolute transform -rotate-45 origin-bottom-left"/>
)

const LEFT_ARM = (
  <div className="h-2.5 w-24 bg-black top-36 right-2 absolute transform rotate-45 origin-bottom-right"/>
)

const RIGHT_LEG = (
  <div className="h-2.5 w-24 bg-black top-44 -right-[5.4rem] absolute transform rotate-[60deg] origin-bottom-left"/>
)

const LEFT_LEG = (

  <div className="h-2.5 w-24 bg-black top-44 right-0 absolute transform -rotate-[60deg] origin-bottom-right"/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HandmanDrawingProps = {
  numberOfGuesses: number;
}

export function HangmanDrawing({numberOfGuesses}: HandmanDrawingProps) {
  return <div className="relative">
    {BODY_PARTS.slice(0, numberOfGuesses)}
    <div className='h-12 w-2.5 bg-black absolute top-0 right-0'/>
    <div className='h-2.5 w-48 bg-black ml-32'/>
    <div className="h-96 w-2.5 bg-black ml-32" />
    <div className="h-2.5 w-64 bg-black"/>
  </div>
}