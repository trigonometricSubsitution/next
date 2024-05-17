import Link from "next/link";
import { 
  Navbar,
  NavbarBrand, 
  NavbarCollapse, 
  NavbarLink, 
  NavbarToggle,
  Footer, 
  FooterCopyright, 
  FooterLink, 
  FooterLinkGroup,
  Carousel,
  Card,
  Button,
  DarkThemeToggle
} from "flowbite-react";

export default function Home() {
  return (
    <>
    <div className="bg-cyan-800">
      <div className="container mx-auto">
        <Navbar fluid className="bg-cyan-800">
          <NavbarBrand as={Link} href="/">
            <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Yuntech Travel</span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="#" className="text-white">
              <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2">交通</span>
            </NavbarLink>
            <NavbarLink as={Link} href="#" className="text-white">
              <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2">景點</span>
            </NavbarLink>
            <NavbarLink href="#" className="text-white">
              <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2">關於我們</span>
            </NavbarLink>
          </NavbarCollapse>
          <DarkThemeToggle />
        </Navbar>
      </div>
    </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>

      <div className="bg-white">
        <div className="container mx-auto">
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/images/blog/image-1.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button>
              Read more
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </div>
      </div>
      <Footer container>
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
      </Footer>
    </>
  );
}
