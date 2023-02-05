export class WaveAnimated {
  private _width: number
  private _height: number
  private _ctx: CanvasRenderingContext2D
  private _count: number
  private _speed: number
  private _updateInterval: number
  private _updateTimer: number
  private _lastUpdateTime: number
  private _animation?: number

  constructor(
    width: number,
    height: number,
    ctx: CanvasRenderingContext2D,
    count: number,
    speed: number,
    targetFPS: number
  ) {
    this._width = width
    this._height = height
    this._ctx = ctx
    this._count = count
    this._speed = speed
    this._updateInterval = 1000 / targetFPS
    this._updateTimer = 0
    this._lastUpdateTime = 0
  }

  private update(deltaTime: number): void {}

  private animate(timeStamp = 0): void {
    const deltaTime = timeStamp - this._lastUpdateTime
    this._lastUpdateTime = timeStamp

    if (this._updateTimer > this._updateInterval) {
      this._updateTimer = 0
      this._ctx.clearRect(0, 0, this._width, this._height)
      this.update(deltaTime)
    } else {
      this._updateTimer += deltaTime
    }

    this._animation = requestAnimationFrame(this.animate.bind(this))
  }

  private cancelAnimation(): void {
    if (this._animation) {
      cancelAnimationFrame(this._animation)
      this._animation = undefined
    }
  }

  private onResize(): void {
    this.cancelAnimation()
    this._width = this._ctx.canvas.clientWidth
    this._height = this._ctx.canvas.clientHeight
    this._ctx.canvas.width = this._width
    this._ctx.canvas.height = this._height
    this.animate()
  }

  public init(): void {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  public dispose(): void {
    window.removeEventListener('resize', this.onResize.bind(this))
  }
}
