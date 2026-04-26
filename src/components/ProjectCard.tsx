import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { Link } from "@tanstack/react-router"
import { MoveUpRight } from "lucide-react"

export type props = {
  Title : string,
  Desc : string,
  Image : string,
  live : boolean,
  link : string,
  stack : string[],
  git : string,
}

export function ProjectCard(meta : props) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={meta.Image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          {
            meta.live &&
            <Link to={meta.link}>
            <Button variant="outline" size="xs">
              View Live
              <MoveUpRight/>
            </Button>
            </Link>

          }
        </CardAction>
        <CardTitle className="font-bold text-xl">{meta.Title}</CardTitle>
        <div className="flex gap-2">
        {
          meta.stack.map((e)=><Badge>{e}</Badge>)
        }
        </div>
        <CardDescription>
          {meta.Desc}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        {
          <Link to={meta.git}>
          <Button className="w-full">More info</Button>
        </Link>
        }
      </CardFooter>
    </Card>
  )
}
