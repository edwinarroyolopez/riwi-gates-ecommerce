'use client';
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Image from "next/image";
import social_media_fb from 'packages/public/assets/img/facebook.png'
import social_media_ig from 'packages/public/assets/img/instagram.png'
import social_media_x from 'packages/public/assets/img/twitter-x.png'
import ButtonIcon from "../ui/ButtonIcon/ButtonIcons.ui";
import { Plaster } from 'next/font/google';

//Font for the Logo
const PlasterFont = Plaster({
    subsets: ['latin'],
    weight: '400',
});

const Body = styled.section`
    display: flex;
    flex-direction: column;
    align-items: end; 
    justify-content: end;
    text-align: end; 
    padding: 40px;

    hr {
        width: 80%; 
        margin: 30px 0;
        border: 1px solid ${({ theme }) => theme.pageColors.textQuaternary};
        align-self: end !important; 
        justify-self: end !important; 
    }
`;

const FooterTag = styled.footer`
    text-align: center;
    position: relative;
    bottom: 0;
    padding: 100px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-family: ${PlasterFont.style.fontFamily};
    font-style: normal;
    font-size: 50px;
    color: ${({ theme }) => theme.pageColors.textQuaternary};
`;

const Section = styled.section`
    margin-bottom: 50px;
    background-color: ${({ theme }) => theme.pageColors.widgetsQuaternary};
    margin-top: 50px;
    padding: 50px;
`;

const SocialMediaSection = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    display: flex;
    gap: 20px;
`;

export const Footer = () => {
    return (
        <FooterTag>
            <Body>
                <h1>Contáctanos</h1>
                <p>Text</p>
                <hr />
            </Body>
            <SocialMediaSection>
                <ButtonIcon btnColor={({ theme }) => theme.pageColors.bgSenary} type="button" icon={
                    <Image src={social_media_fb} alt="Socials icon" style={{ width: 20, height: 20 }} />
                } onClick={() => console.log('Social Media Button was clicked!')}  href="https://www.facebook.com/?locale=es_LA" target="_blank"/>
                <ButtonIcon btnColor={({ theme }) => theme.pageColors.bgQuaternary} type="button" icon={
                    <Image src={social_media_ig} alt="Socials icon" style={{ width: 20, height: 20 }} />
                } onClick={() => console.log('Social Media Button was clicked!')}  href="https://www.instagram.com/" target="_blank"/>
                <ButtonIcon btnColor={({ theme }) => theme.pageColors.bgQuinary} type="button" icon={
                    <Image src={social_media_x} alt="Socials icon" style={{ width: 20, height: 20 }} />
                } onClick={() => console.log('Social Media Button was clicked!')}  href="https://x.com/?lang=es" target="_blank"/>
            </SocialMediaSection>
            <Section>
                <Title>GATES</Title>
                <p>&copy; 2024 Gates, Inc.</p>
                <p>Todos los derechos reservados.</p>
            </Section>
        </FooterTag>
    );
};




