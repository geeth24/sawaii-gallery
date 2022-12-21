import React from "react"
//@ts-ignore
// import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"
// import "lightgallery.js/dist/css/lightgallery.css"
import { Container, Image, Tabs, Text } from "@mantine/core"

import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import LightGallery from "lightgallery/react"



function Gallery() {

    const onInit = () => {
        console.log("lightGallery has been initialized")
    }

    return (
      <>
      <Text size={70} align="center" mb="xl" mt="xl">
        SAWAII GALLERY
      </Text>
     
        <Container size="lg" id="gallery" mb="xl" pt={50}>
             <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="custom-wrapper-class"
                download={false}
                mode="lg-fade"
            >
               
              {[...Array(23)].map((_, index) => (
                <div
                  key={index+1}
                  data-src={`/images/SAWAII${index+1}.jpg`}
                  // data-sub-html={`<h4>Image ${index+1}</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, quod.</p>`}
                  data-responsive={`/images/SAWAII${index+1}.jpg 375, /images/SAWAII${index+1}.jpg 480, /images/SAWAII${index+1}.jpg 800`}
                  style={{cursor: "pointer"}}
                 
                >
                  <Image
                    src={`/images/SAWAII${index+1}.jpg`}
                    alt="thumbnail"

                  />
                </div>
              ))}
            </LightGallery>
        </Container>
          </>
    )
  
}

export default Gallery
