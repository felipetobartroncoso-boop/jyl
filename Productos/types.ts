const Objetos = [{

    objeto1: {
        image: "www.google.cl/image/ejemplo",
        title: "hola",
        description: "objeto descripción",
        ancho: "medidas",
        precio: 20348,
    },
    objeto2: {
        image: "www.google.cl/image/ejemplo",
        title: "hola",
        description: "objeto descripción",
        ancho: "medidas",
        largo: "medidas",
        alto: "medidas",
        precio: 20348,
    }
}];

export type ObjectProps = {
    image: string,
    title: string,
    description: string,
    ancho?: number,
    largo?: number,
    alto?: number,
    precio?: string,
};