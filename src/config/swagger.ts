import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const option : swaggerJSDoc.Options = {
    swaggerDefinition : {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Node.js / Express / TypeScript',
            version: "1.0.0",
            description: "API Docs for Products"
        }
    },
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(option)

const swaggerUiOptions = {
    customCss: `
        .topbar-wrapper .link {
            content: url('https://images.vexels.com/content/223307/preview/peru-andean-woman-design-1cf386.png');
            height: 80px;
            width: auto;
        }
        .swagger-ui .topbar {
            background-color: #C5AAB5;
        }
    `,
    customSiteTitle: 'Documentacion REST API Express / TypeScript'
}


export default swaggerSpec
export {
    swaggerUiOptions
}