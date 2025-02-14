import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export function PopoverButton({ inner, over, classOver, classInner }) {
    return (
        <Popover>
            <PopoverTrigger asChild className={classInner}>
                <Button variant="outline">{inner}</Button>
            </PopoverTrigger>
            <PopoverContent className={classOver}>
                {over}
            </PopoverContent>
        </Popover>
    )
}