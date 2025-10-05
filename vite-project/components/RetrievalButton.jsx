
import { useState } from "react";
import axios from "axios";

function RetrievalButton() {
    // State variables for user input
    const [book, setBook] = useState("");
    const [chapter, setChapter] = useState("");
    const [verse, setVerse] = useState("");
    const [displayText, setDisplayText] = useState("Enter a book, chapter, and verse");

    // Function to handle the API request
    const callAPIByReference = async (event) => {
        event.preventDefault();
        if (!book || !chapter || !verse) {
            setDisplayText("Please enter a valid book, chapter, and verse.");
            return;
        }
        
        try {
            const response = await axios.get(
                `https://labs.bible.org/api/?passage=${book} ${chapter}:${verse}&formatting=plain`
            );
            console.log("API Response:", response.data);
            setDisplayText(response.data || "Verse not found. Check your input.");
        } catch (error) {
            console.error("Error fetching data:", error);
            setDisplayText("Error retrieving the verse. Please try again.");
        }
    };

    return (
        <>
            <h2>{displayText}</h2>
            <p>Enter a book name, chapter, and verse to retrieve a specific Bible verse.</p>
            <form onSubmit={callAPIByReference}>
                <input 
                    type="text" 
                    placeholder="Book (e.g., John)"
                    value={book}
                    onChange={(e) => setBook(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Chapter"
                    value={chapter}
                    onChange={(e) => setChapter(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Verse"
                    value={verse}
                    onChange={(e) => setVerse(e.target.value)}
                />
                <input type="submit" value="Retrieve Verse" />
            </form>
        </>
    );
};

export default RetrievalButton;
