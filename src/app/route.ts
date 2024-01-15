import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
    let jobs = [
        { imageID: "1",
          title: "Flex Sweatshirt",
          description: "Sweatshirt",
          price: "500$",
          image: "https://i.ibb.co/SfLHCs7/lady01.png"
        },
        { imageID: "2",
          title: "Flex Sweatshirt",
          description: "Sweatshirt",
          price: "500$",
          image: "https://i.ibb.co/2WVC4MV/lady02.png"
        },
        { imageID: "3",
          title: "Flex Sweatshirt",
          description: "Sweatshirt",
          price: "500$",
          image: "https://i.ibb.co/LtWZ5c7/lady03.png"
        },
        { imageID: "4",
          title: "Flex Sweatshirt",
          description: "Sweatshirt",
          price: "500$",
          image: "https://i.ibb.co/qjZ2Pgc/lady04.png"
        },
        { imageID: "5",
          title: "Flex Sweatshirt",
          description: "Sweatshirt",
          price: "500$",
          image: "https://i.ibb.co/WsWwgPG/lady05.png"
        }
        
      ]
    return NextResponse.json(  jobs  )
}