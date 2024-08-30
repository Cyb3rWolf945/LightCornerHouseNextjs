import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import NextLink from "next/link";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import { Typography } from "@mui/material";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { FacebookIcon, InstagramIcon } from "./icons";

export const Footer = () => {
  return (


    <Grid2 container direction="column">
      <div className="bg-black">

        <Grid2 display="flex" justifyContent="center" padding={2}>
          <Image
            radius='none'
            as={NextImage}
            width={100}
            height={60}
            src="/logoTr.png"
            alt="NextUI hero Image"
          />
        </Grid2>

        <Grid2 container justifyContent="center" padding={0}>
          <Grid2 xs={12} md={5} alignContent="center">
            <Typography
              variant="body2"
              className=" text-wrap p-4 text-justify text-base text-white"
              style={{ textAlign: 'center' }}
            >
              Rua Bartolomeu da Costa 43, 1170-048 Lisboa, Portugal lightcornerhouse@gmail.com. © Lisbon, Portugal, 2019. All rights reserved.
            </Typography>
          </Grid2>
        </Grid2>

        <Grid2 container display="flex" justifyContent="center" alignItems="center" padding={0}>
          <Grid2>
            <Typography variant="caption" className="text-wrap p-4 text-sm text-white">
              Aviso Legal
            </Typography>
          </Grid2>
          <Grid2>
            <NextLink href="https://www.livroreclamacoes.pt/Inicio/">
              <Image
                radius='none'
                as={NextImage}
                width={120}
                height={50}
                src="/i006570.png"
                alt="Livro de reclamações"
              />
            </NextLink>
          </Grid2>
        </Grid2>


        {/* <Grid2 marginTop={1} container display="flex" justifyContent="center" padding={0} spacing={2}>
        <Grid2>
        <NextLink href="https://www.instagram.com/lightcornerhouse_official/">
        <InstagramIcon size={22} />
        </NextLink>
        </Grid2>
        <Grid2>
        <NextLink href="https://www.facebook.com/lightcornerhouse/">
        <FacebookIcon size={22} />
        </NextLink>
        </Grid2>
        </Grid2> */}


      </div>
    </Grid2>
  )
}