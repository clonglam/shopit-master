import CreateProductForm from './components/CreateProductForm'
import EditProductForm from './components/EditProductForm'
import ProductContact from './components/ProductContact'
import ProductDetailView from './components/ProductDetailView'
import ProductGrid from './components/ProductsGrid'
import ProductsTable from './components/ProductsTable'
import { Product } from './hooks/productService'
import ProductsFilter from './inputs/ProductsFilter'
import ProudctQuantityInputField from './inputs/ProudctQuantityInputField'

export {
  CreateProductForm,
  EditProductForm,
  ProductContact,
  ProductGrid,
  ProductsFilter,
  ProductsTable,
  ProudctQuantityInputField,
}
export type { Product }
export default ProductDetailView
