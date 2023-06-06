import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'

import useDeleteProduct from '../hooks/useDeleteProduct'

interface Props {
  productId?: number
  isOpen: boolean
  onClose: () => void
}

const DeleteProductModal = ({ productId, isOpen, onClose }: Props) => {
  const deleteProduct = useDeleteProduct()

  const deleteHanddler = () => {
    if (!productId) return

    deleteProduct.mutate(productId)
    onClose()
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Product {productId}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {`This will permanentitly delete the Product. This action can't be
          undone.`}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          {productId && (
            <Button variant="ghost" onClick={deleteHanddler}>
              Delete Project
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DeleteProductModal
