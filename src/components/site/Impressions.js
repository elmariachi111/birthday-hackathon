import React from 'react'
import Lightbox from 'react-image-lightbox'

import StackGrid, { transitions } from 'react-stack-grid'
import { Box, Image } from 'grommet'

import 'react-image-lightbox/style.css'

const { scaleDown } = transitions

export default class Impressions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      photoIndex: 0,
      isOpen: false,
      caption: null,
      imgCount: 10
    }
  }

  render () {
    const imgs = this.props.images
      .map((i, idx) => (
        <Box key={i.public_id} height="medium" width="large">
          <Image
            fit="cover"
            src={i.txb_preview_image.secure_url}
            onClick={() => this.setState({ isOpen: true, photoIndex: idx })}
          />
        </Box>
      ))
      .slice(0, this.state.imgCount)

    const captions = this.props.images.map(i =>
      i.context ? i.context.custom.caption : ''
    )

    const lbImgs = this.props.images.map(i => ({
      orig: i.maxeco_image.secure_url,
      thumb: i.txb_preview_image.secure_url
    }))

    const { photoIndex, isOpen } = this.state

    const Button = this.props.button

    return (
      <>
        <StackGrid
          columnWidth={280}
          duration={600}
          monitorImagesLoaded={true}
          appearDelay={150}
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
        >
          {imgs}
        </StackGrid>
        {this.state.imgCount < this.props.images.length && (
          <Button
            {...this.props.buttonProps}
            onClick={() =>
              this.setState({ imgCount: this.state.imgCount + 10 })
            }
          />
        )}

        {isOpen && (
          <Lightbox
            mainSrc={lbImgs[photoIndex].orig}
            nextSrc={lbImgs[(photoIndex + 1) % lbImgs.length].orig}
            prevSrc={
              lbImgs[(photoIndex + lbImgs.length - 1) % lbImgs.length].orig
            }
            mainSrcThumbnail={lbImgs[photoIndex].thumb}
            nextSrcThumbnail={lbImgs[(photoIndex + 1) % lbImgs.length].thumb}
            prevSrcThumbnail={
              lbImgs[(photoIndex + lbImgs.length - 1) % lbImgs.length].thumb
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + lbImgs.length - 1) % lbImgs.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % lbImgs.length
              })
            }
            imageTitle={captions[photoIndex]}
            enableZoom={true}
          />
        )}
      </>
    )
  }
}
