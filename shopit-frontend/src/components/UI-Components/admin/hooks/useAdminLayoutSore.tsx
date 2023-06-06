import { create } from 'zustand'

interface AdminLayoutStore {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
  onToggle: () => void
}

const useAdminLayoutStore = create<AdminLayoutStore>((set, get) => ({
  isOpen: false,
  onToggle: () => {
    const isOpen = get().isOpen
    set(() => ({ isOpen: !isOpen }))
  },
  onClose: () => set(() => ({ isOpen: false })),
  onOpen: () => set(() => ({ isOpen: true })),
}))

export default useAdminLayoutStore
