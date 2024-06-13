// Components
import MyComponent from "./MyComponent";

// arquivo de estilo

const FirstComponent = () => {
    // essa função faz isso

    return (
        <>
            {/* Algum comentário */}
            <h1>Meu primeiro componente</h1>
            <p class="teste">Meu texto</p>
            <MyComponent/>
        </>
    );

};

export default FirstComponent;