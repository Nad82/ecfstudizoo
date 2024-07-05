import * as React from 'react';
import { Html, Heading, Text, Tailwind, Body, Container, Section, Img, Head, Hr } from '@react-email/components';

const EmailTemplate = ({
    titre,
    description,
    email
} : {
    titre : string,
    description : string,
    email : string
}) => {
    return (
        <Html lang = "fr">
            <Tailwind>
                <Body>
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Heading className='text-4xl font-bold text-green-600 text-center p-0 my-[30px] mx-0'>
                            Zoo Arcadia
                        </Heading>      
                        <Heading className='text-black text-[24px] font-bold text-center p-0 my-[30px] mx-0'>
                        Accusé de réception de votre message: {titre}
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Nous accusons réception de votre message. Voici le contenu:
                        </Text>
                        <Hr className='border-[#eaeaea]'/>
                        <Text className="text-black font-bold text-[16px] leading-[24px]" >
                            Titre: {titre}
                        </Text>
                        <Text className="text-black font-bold text-[16px] leading-[24px]">
                            Description: {description}
                        </Text>
                        <Text className="text-black font-bold text-[16px] leading-[24px]">
                            Email: {email}
                        </Text>
                        <Hr className='border-[#eaeaea]'/>
                        <Section>
                            <Text className="text-black text-[14px] leading-[24px]" >
                                Nous vous remercions d'avoir pris contact avec nous.
                                Nous vous recontacterons dans les plus brefs délais.
                            </Text>
                            <Text>
                                Cordialement,
                            </Text>
                        </Section>
                        <Section>
                            <Text className="text-black text-[14px] leading-[24px]" >
                                L'équipe du Zoo Arcadia
                            </Text>
                        </Section>
                        <Section>
                            <Text className='text-black text-[12px] leading-[24px]'>
                                © 2024 Zoo Arcadia. Tous droits réservés.
                            </Text>
                        </Section>
                        <Section>
                            <Text className='text-red-800 text-[14px] leading-[24px]'>
                                S'il vous plait, veuillez ne pas répondre à cet email.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export { EmailTemplate }
