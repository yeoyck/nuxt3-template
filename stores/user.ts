import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const savedName = ref<string | null>(null)
  const previousNames = ref(<string[]>[])

  const otherNames = computed(() => previousNames.value.filter((name) => name !== savedName.value))

  function setNewName(name: string) {
    if (savedName.value && !previousNames.value.includes(savedName.value)) previousNames.value.push(savedName.value)

    savedName.value = name
  }

  return {
    setNewName,
    otherNames,
    savedName,
    previousNames
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
