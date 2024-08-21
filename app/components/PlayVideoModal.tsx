import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface iAppProps {
  title: string;
  overview: string;
  state: boolean;
  changeState: any;
  youtubeUrl: string;
}
const PlayVideoModal = ({
  title,
  overview,
  state,
  changeState,
  youtubeUrl,
}: iAppProps) => {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{overview}</DialogDescription>
        </DialogHeader>
        <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default PlayVideoModal;
