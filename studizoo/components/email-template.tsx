import * as React from 'react';
import { Html, Heading, Text } from '@react-email/components';

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
            <Heading as= 'h1'>
            Accusé de réception de votre message: {titre}
            </Heading>
            <Text>
                Nous accusons réception de votre message. Voici le contenu:
            </Text>
            <Text>
                titre: {titre}
            </Text>
            <Text>
                description: {description}
            </Text>
            <Text>
                email: {email}
            </Text>
            <Text>
                Nous vous remercions d'avoir pris contact avec nous.
            </Text>
            <Text>
                Nous vous recontacterons dans les plus brefs délais.
            </Text>
            <Text>
                Cordialement,
            </Text>
            <Text>
                L'équipe du Zoo Arcadia
            </Text>
        </Html>
    )
}

export { EmailTemplate }
