
import { Image } from "@nextui-org/image"

export const HeroShowRooms = () => {
    return(
    <div className="hidden md:flex my-4" style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
        className="object-cover dark:!opacity-70"
        src="/Rooms/ShowRooms/lisbon.png"
        alt="Background Image"
      />
    </div>
    )
}