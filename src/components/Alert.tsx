import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../components/ui/alert-dialog";

export function Alert({ data, onConfirm, onCancel }) {
    return (
        <AlertDialog open={data.show}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{data.title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {data.description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                {data.cancel || confirm ? <AlertDialogFooter>
                    {data.cancel.show && <AlertDialogCancel onClick={onCancel}>{data.cancel.text}</AlertDialogCancel>}
                    {data.confirm.show && <AlertDialogAction onClick={onConfirm}>{data.confirm.text}</AlertDialogAction>}
                </AlertDialogFooter> : null}
            </AlertDialogContent>
        </AlertDialog>
    )
}
