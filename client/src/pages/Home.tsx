import HomeImage from "../assets/homeImage.jpeg"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {
  return (
    <div className='flex flex-col'>
      
      <div className='h-[92.5vh] w-full  overflow-hidden'>
        <img
          src={HomeImage}
          alt="Home"
          className="w-full h-full object-cover"
        />
        <div className="fixed bottom-4 right-4 z-50">
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="bg-white text-black border border-gray-300 rounded-md px-3 py-1 shadow">
                Hover Here !!
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black border border-gray-300 rounded-md px-3 py-1 text-sm shadow-lg">
              <p>Please use the navbar to roll through the page</p>
            </TooltipContent>
          </Tooltip>

        </div>
      </div>

    </div>
  )
}
