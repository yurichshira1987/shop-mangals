import './style.scss'
import State from '../../redux/state'
import Actions from '../../redux/actions'
import { connect } from 'react-redux'
import { useEffect, useRef, useState } from 'react'

let clonePreview
let preview
let moveX
let moveY


const MainButton = ({ addClass, productForCart, getDataFromCart, setBottomBarModals, bottomBarModals, setCurrentProductPreviewInfo, setShowPreInfoModal,
    showPreInfoModal, type, currentProductInfo }) => {

    const btnRef = useRef()
    const showCartAddModal = () => {
        let cloneBottomBarModal = { ...bottomBarModals }
        if (bottomBarModals.cart.show === 1) cloneBottomBarModal.cart.show = 2
        else cloneBottomBarModal.cart.show = 1

        setBottomBarModals(cloneBottomBarModal)
    }

    const showClonePreview = () => {
        const bottomCartX = document.querySelector('.bottom-bar__carts').getBoundingClientRect().x

        if (type === 'preview-standart') {
            preview = btnRef.current.parentNode.parentNode.parentNode
            moveX = bottomCartX
            moveY = window.innerHeight + window.scrollY - 220
        }
        if (type === 'preview-list') {
            preview = btnRef.current.parentNode.parentNode
            moveX = bottomCartX - preview.clientWidth / 3
            moveY = window.innerHeight + window.scrollY - 150
        }
        if (type === 'preview-text') {
            preview = btnRef.current.parentNode.parentNode
            moveX = bottomCartX - preview.clientWidth / 3
            moveY = window.innerHeight + window.scrollY - 50
        }
        if (type === 'pre-info-modal') {
            preview = btnRef.current.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            moveX = bottomCartX - preview.clientWidth / 3
            moveY = window.innerHeight - preview.clientHeight / 3
        }
        if (type === 'main-page') {
            preview = document.querySelector('#mainPageImage')
            moveX = bottomCartX - preview.clientWidth / 3
            moveY = window.innerHeight + window.scrollY - 200
        }
        if (type === 'accessoriesModal') {
            preview = btnRef.current.parentNode.parentNode.parentNode
            moveX = bottomCartX - preview.clientWidth / 3
            moveY = window.innerHeight + window.scrollY - 200
            console.log(preview)
        }

        clonePreview = preview.cloneNode(true)
        clonePreview.classList.add('clonePreview')
        clonePreview.style.width = preview.clientWidth + 'px'
        clonePreview.style.height = preview.clientHeight + 'px'
        clonePreview.style.left = preview.getBoundingClientRect().left + 'px'
        if (type === 'pre-info-modal') clonePreview.style.top = preview.getBoundingClientRect().top + 'px'
        else clonePreview.style.top = (preview.getBoundingClientRect().top + window.scrollY) + 'px'
        document.body.appendChild(clonePreview)

        setTimeout(() => {
            moveClonePreview()
        }, [1])
    }

    const moveClonePreview = () => {
        clonePreview.style.transition = '1.2s'
        clonePreview.style.top = moveY + 'px'
        clonePreview.style.left = moveX + 'px'
        clonePreview.style.transform = ` scale(0)`
        clonePreview.style.opacity = 0.4
    }


    const addProductToCard = () => {
        if (productForCart.select.length && !showPreInfoModal && !currentProductInfo) {
            setCurrentProductPreviewInfo(productForCart)
            setShowPreInfoModal(true)
            return
        }
        showCartAddModal()
        let storage = JSON.parse(localStorage.getItem('myCart'))
        let select??oincided = []
        let select??oincidedLength = []
        let add??oincided = []
        let add??oincidedLength = []
        let addToCount = false
        for (let i = 0; i < storage.length; i++) {
            if (productForCart.code === storage[i].code) {
                if (storage[i].select.length && productForCart.select.length) {
                    select??oincided = []
                    select??oincidedLength = []
                    for (let j = 0; j < storage[i].select.length; j++) {
                        for (let k = 0; k < storage[i].select[j].choice.length; k++) {
                            if (storage[i].select[j].choice[k].active === productForCart.select[j].choice[k].active) {
                                select??oincided.push(1)
                            }
                            select??oincidedLength.push(1)
                        }
                    }
                }
                if (storage[i].add.length && productForCart.add.length) {
                    add??oincided = []
                    add??oincidedLength = []
                    for (let a = 0; a < storage[i].add.length; a++) {
                        if (storage[i].add[a].active === productForCart.add[a].active) {
                            add??oincided.push(1)
                        }
                        add??oincidedLength.push(1)
                    }
                }
                if ((select??oincided.length === select??oincidedLength.length) && (add??oincided.length === add??oincidedLength.length)
                    && (select??oincided.length || add??oincided.length)) {
                    addToCount = true
                }
                else {
                    addToCount = false
                }
            }
            if (addToCount) {
                storage[i].count += 1
                localStorage.setItem('myCart', JSON.stringify(storage))
                getDataFromCart()
                showClonePreview()
                setShowPreInfoModal(false)
                return
            }
        }

        storage.push(productForCart)
        localStorage.setItem('myCart', JSON.stringify(storage))
        getDataFromCart()
        showClonePreview()
        setShowPreInfoModal(false)
    }

    return (
        <div ref={btnRef} onClick={addProductToCard} className={"main-button " + (addClass ? addClass : '')}>
            <i className="fas fa-cart-plus"></i>
            <div>?? ??????????????</div>
        </div>
    )
}
export default connect(State, Actions)(MainButton)