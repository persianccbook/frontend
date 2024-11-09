    import markdown from "!!raw-loader!./markdown.md";
    import { Box } from "@mui/material";
import MarkdownRenderer from "./MarkdownRenderer";


    interface Props {
    params: {
        book_id: string;
        chapter_id: string;
        page_id: string;
    };
    }

    const Reader = async ({}: Props) => {
    return (
        <Box sx={{ m: 20, p: 10, direction: "ltr" }}>
            <MarkdownRenderer markdown={markdown}/>
        </Box>
    );
    };

    export default Reader;
