import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import State from '../../redux/state'
import Actions from '../../redux/actions'

let slidesToScroll
let clickX
let startX
let dragShift
let currentSLide = 0
let positionX = 0
let slidesToShow
let autoScroll

const SliderForBestSell = ({ sliderData }) => {
    const { sliderHTML, sliderWrapperId, sliderBtnLeftId, sliderBtnLeftRightId, slidesClass } = sliderData
    const [sliderWrapper, setSliderWrapper] = useState(null)
    const [slider, setSlider] = useState(null)
    const [slides, setSlides] = useState([])
    const [sliderBtnLeft, setSliderBtnLeft] = useState(null)
    const [sliderBtnRight, setSliderBtnRight] = useState(null)

    let autoScrollTime = 15000

    const adaptiveForResize = () => {
        if (window.innerWidth > 1200) {
            slidesToShow = 5
        }
        if (window.innerWidth <= 1200) {
            slidesToShow = 4
        }
        if (window.innerWidth <= 990) {
            slidesToShow = 3
        }
        if (window.innerWidth <= 780) {
            slidesToShow = 2
        }
        // if (window.innerWidth <= 460) {
        //     slidesToShow = 1
        // }
    }

    const setParameters = () => {
        if (slider && sliderWrapper.clientWidth && slides.length) {
            adaptiveForResize()
            slides.forEach(item => {
                item.style.minWidth = sliderWrapper.clientWidth / slidesToShow + 'px'
            })
            currentSLide = 0
            positionX = -currentSLide * slides[0].clientWidth
            setStyleTransition(0.25)
            setSliderPosition()

            resetAutoScroll()
            setAutoScroll(true)
        }
    }

    const addEvents = () => {
        if (slider && slides.length && sliderWrapper && sliderBtnRight && sliderBtnLeft) {
            sliderBtnRight.onclick = () => moveSliderToRight(false)
            sliderBtnLeft.onclick = moveSliderToLeft
            window.onresize = setParameters

            slider.onpointerdown = startDrag
            // slider.addEventListener("touchstart", startDrag, false);
        }
    }
    

    const startDrag = (e) => {
        resetStyleTransition()
        resetAutoScroll()
        document.body.style.cursor = 'grabbing'
        clickX = e.pageX
        startX = positionX

        window.onpointerup = stopDrag
        window.onpointermove = dragging
        slider.ontouchend = stopDrag
    }

    const stopDrag = () => {
        if (dragShift < -20) {
            if (dragShift > (-slides[0].clientWidth / 2)) {
                slidesToScroll = 1
            }
            adaptiveSlidesToScrollRight()
        }
        if (dragShift > 20) {
            if (dragShift < (slides[0].clientWidth / 2)) {
                slidesToScroll = 1
            }
            adaptiveSlidesToScrollLeft()
        }
        document.body.style.cursor = 'auto'
        positionX = -currentSLide * slides[0].clientWidth
        setStyleTransition(0.25)
        setSliderPosition()
        window.onpointermove = null
        window.onpointerup = null
        slider.ontouchend = null
        dragShift = 0
        setAutoScroll()
    }

    const dragging = (e) => {
        // console.log('dragging')
        let drag = e.pageX
        dragShift = drag - clickX
        let easing = dragShift / 5
        let maximumX = (slides.length * slides[0].clientWidth) - sliderWrapper.clientWidth

        positionX = Math.max(Math.min(startX + dragShift, easing), -maximumX + easing)

        slidesToScroll = Math.abs(Math.round(dragShift / slides[0].clientWidth))
        setSliderPosition()
    }

    const moveSliderToLeft = () => {
        slidesToScroll = 1
        adaptiveSlidesToScrollLeft()
        positionX = -currentSLide * slides[0].clientWidth
        setSliderPosition()
    }

    const moveSliderToRight = (auto) => {
        currentSLide += 1
        if ((currentSLide + slidesToShow - 1) === slides.length) {
            setStyleTransition(0.8)
            positionX = 0
            currentSLide = 0
        }
        else {
            if (auto) {
                setStyleTransition(1.6)
            }
            else {
                resetAutoScroll()
                setAutoScroll(true)
                setStyleTransition(0.25)
            }
            positionX = -currentSLide * slides[0].clientWidth
        }
        setSliderPosition()
    }

    const adaptiveSlidesToScrollRight = () => {
        let cloneSlidesToScroll = slidesToScroll
        for (let i = slidesToScroll; i > 0; i--) {
            if (currentSLide + cloneSlidesToScroll > slides.length - slidesToShow) {
                cloneSlidesToScroll -= 1
            }
        }
        currentSLide = currentSLide + cloneSlidesToScroll
    }

    const adaptiveSlidesToScrollLeft = () => {
        let cloneSlidesToScroll = slidesToScroll
        for (let i = slidesToScroll; i > 0; i--) {
            if (currentSLide - cloneSlidesToScroll < 0) {
                cloneSlidesToScroll -= 1
            }
        }
        currentSLide = currentSLide - cloneSlidesToScroll
    }

    const setSliderPosition = () => {
        slider.style.transform = `translate(${positionX}px, 0)`
    }

    const setStyleTransition = (second) => {
        slider.style.transition = `all ${second}s ease 0s`
    }

    const resetStyleTransition = () => {
        slider.style.transition = `all 0s ease 0s`
    }

    const setAutoScroll = () => {
        autoScroll = setInterval(() => moveSliderToRight(true), autoScrollTime)
    }
    const resetAutoScroll = () => {
        clearInterval(autoScroll)
    }

    useEffect(() => {
        addEvents()
    }, [slider, slides.length, sliderWrapper, sliderBtnRight, sliderBtnLeft, window.innerWidth])

    useEffect(() => {
        setParameters()
    }, [slider, sliderWrapper?.clientWidth, slides?.length])


    useEffect(() => {
        setSliderWrapper(document.querySelector(`#${sliderWrapperId}`))
        setSlider(sliderWrapper?.childNodes[0])
        setSlides(document.querySelectorAll(`.${slidesClass}`))
        setSliderBtnLeft(document.querySelector(`#${sliderBtnLeftId}`))
        setSliderBtnRight(document.querySelector(`#${sliderBtnLeftRightId}`))

    }, [sliderData, sliderWrapper, slider, slider?.childNodes])


    return (
        <>
            {sliderHTML()}
        </>
    )
}

export default connect(State, Actions)(SliderForBestSell)