/**
 * @author 蔡翔宇 <b11117048@gemail.yuntech.edu.tw>
 */
'use client';

import { useState, useEffect} from 'react';
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
import CustomCard from "./components/Card";

export default function Home() {

  const [items, setItems] = useState([]);
  const tokenUrl = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';
  const apiUrl = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty';

  useEffect(() => {
    const getToken = async () => {
      const clientId = process.env.TDX_CLIENT_ID;
      const clientSecret = process.env.TDX_CLIENT_SECRET;

      const tokenParams = new URLSearchParams();
      tokenParams.append('grant_type', 'client_credentials');
      tokenParams.append('client_id', clientId);
      tokenParams.append('client_secret', clientSecret);

      const tokenResponse = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: tokenParams.toString()
      });
    };

  }, []);

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
          <img src="/banner/banner-1.jpg" alt="由 黃庭富 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110577446" />
          <img src="/banner/banner-2.jpg" alt="由 白襪 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=129500844" />
          <img src="/banner/banner-3.jpg" alt="由 禮名畫的生活旅遊日記 FB - https://www.flickr.com/photos/8628250@N08/22539827266/, CC0, https://commons.wikimedia.org/w/index.php?curid=64438935" />
          <img src="/banner/banner-4.jpg" alt="由 Viy4092 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=44814900" />
          <img src="/banner/banner-5.jpg" alt="由 Mk2010 - 自己的作品, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=28418713" />
        </Carousel>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-4 gap-4">
          { items.map( item =>
          <Card
            className="max-w-sm"
            imgAlt={item.Picture.PictureDescription1}
            imgSrc={item.Picture.PictureUrl1}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.ScenicSpotName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.DescriptionDetail}
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
          )}
        </div>
      </div>
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          {
            items.map( item =>
              <CustomCard item={item}/>
          )}
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
