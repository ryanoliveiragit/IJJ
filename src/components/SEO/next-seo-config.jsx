const title = 'jogajunto titulo';
const description = 'jogajunto descrição'

const SEO = {
    title,
    description,
    canonical: 'https://jogajunto.com.br',
    openGraph: {
        type: 'website',
        locate: 'pt-BR',
        url: 'https://jogajunto.com',
        title,
        description,
        images: [
            {
                url: 'https://jogajunto.com.br/og.png',
                alt: title,
                width: 1280,
                height: 720,
            },
        ],
    },
};