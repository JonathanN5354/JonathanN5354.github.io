import { ChakraProvider } from "@chakra-ui/react";
import FullScreenSection from "./components/FullScreenSection";
import Stickers from "./components/Stickers";
import Bio from "./components/BioSection";

function App() {
  return (
    <ChakraProvider>
      <main>
        <FullScreenSection />
      </main>
    </ChakraProvider>
  );
}

export default App;
