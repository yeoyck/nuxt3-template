export function useLoading() {
  const testWaiting = async (ms: number, produceError = false) => {
    await new Promise((resolve) => setTimeout(resolve, ms))
    if (!produceError) return new Date()
    else return Promise.reject(new Error('Error: Error Detected'))
  }

  return { testWaiting }
}
