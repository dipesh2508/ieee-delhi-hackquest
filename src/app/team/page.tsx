import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/Card"
import { team } from "@/constants/team"
import Link from "next/link"
import Image from 'next/image'

const page = () => {
  return (
<div className="flex px-12 text-white bg-dark w-full flex-wrap justify-center py-36 gap-y-8">
    <h2 className="w-full text-center text-secondary font-secondary text-6xl font-semibold my-8">Know the Team</h2>
        {team.map((item, index) => (
          <Link href={item.link} key={index}>
          <Card
            className=" flex w-[300px] justify-center rounded-3xl bg-none opacity-90"
          >
            <CardContent className="relative transform overflow-hidden rounded py-0 shadow-lg transition duration-300 hover:shadow-2xl lg:hover:-translate-y-2">
              <Image
                src={item.image}
                className="rounded-xl h-full"
                width="300"
                height="300"
                alt={item.Name}
              />
              <div className="ml-5 w-[260px] absolute inset-0 flex flex-col justify-center rounded-xl  hover:border-2 bg-black bg-opacity-75 px-5 text-center opacity-0 transition-opacity duration-300 hover:border-headings hover:opacity-100">
                <CardTitle>{item.Name}</CardTitle>
                <CardDescription className="text-headings">{item.position}</CardDescription>
              </div>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
  )
}

export default page