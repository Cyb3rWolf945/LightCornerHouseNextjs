import { Box } from "@mui/material";
import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"
import NextLink from "next/link";

export const HeroSection = () => {
    return (
        <>
          <div className="hidden md:flex" style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Background Image */}
      <Image
        className="object-cover dark:!opacity-70"
        src="/Home/Hero.jpg"
        alt="Background Image"
      />

      {/* Logo Image and Button */}
      <Box  sx={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        textAlign: 'center',
        bottom: {
          xs: '118px',  // When the viewport is smaller than the `sm` breakpoint
          md: '235px', // When the viewport is `md` (768px and above)
        },
      }}>
        <Image
          src="/logoTr.png"
          alt="Logotip Image"
        />

        <NextLink className="flex justify-center" href={"#WelcomeSection"} passHref>
          <Button
            isIconOnly
            variant="bordered"
            size="lg"
            className="text-white hidden md:flex rounded-full"
            style={{ marginTop: '20px' }} // Add some spacing between the logo and the button
          >
            <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
            </svg>
          </Button>
        </NextLink>
      </Box>
    </div>
        </>
    )
}