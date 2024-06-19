/**
 * @author 蔡翔宇 <b11117048@gemail.yuntech.edu.tw>
 */
'use client';

import { useState, useEffect} from 'react';
import Link from "next/link";
import Image from 'next/image';
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
  Button,
  DarkThemeToggle
} from "flowbite-react";
import Card from "./components/Card";

export default function Home() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('api/items');
      const data = await response.json();
      console.log(data);
      setItems(data);
    }
    fetchData();
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

      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {
            items.map( (item, index) =>
              <Card item={item} key={index}/>
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
