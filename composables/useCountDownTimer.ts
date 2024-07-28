import { intervalToDuration, isBefore } from 'date-fns'

export function useCountDownTimer(useRealTime = false) {
  const totalTime = ref(0)
  const startAt = ref(0)
  const duration = ref<Duration>({})

  const {
    isActive: isIntervalActive,
    resume: startInterval,
    pause: stopInterval,
  } = useIntervalFn(intervalCountDown, 1000, { immediate: false, immediateCallback: true })
  const {
    isPending: isTimeoutActive,
    start: startTimeout,
    stop: stopTimeout,
  } = useTimeoutFn(realTimeCountDown, () => Date.now() % 1000, { immediate: false })

  const isTimerActive = computed(() => (useRealTime ? isTimeoutActive.value : isIntervalActive.value))

  function realTimeCountDown() {
    const now = Date.now()
    const endTimestampMilliseconds = startAt.value + totalTime.value * 1000

    if (isBefore(endTimestampMilliseconds, now)) {
      stopTimeout()
      return
    }

    duration.value = intervalToDuration({
      start: now,
      end: endTimestampMilliseconds,
    })
    startTimeout()
  }

  function intervalCountDown() {
    if (totalTime.value === 0) {
      stopInterval()
    }

    duration.value = convertSecondsToDuration(totalTime.value--)
  }

  function startCountDownTimer(inputSeconds: number) {
    totalTime.value = inputSeconds
    startAt.value = Date.now()
    if (useRealTime) {
      realTimeCountDown()
    } else {
      startInterval()
    }
  }

  function clearTimer() {
    if (useRealTime) {
      stopTimeout()
    } else {
      stopInterval()
    }
  }

  return {
    duration,
    isTimerActive,
    startCountDownTimer,
    clearTimer,
  }
}
