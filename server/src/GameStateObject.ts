export class DurableObjectExample {
  state: any;
  value: any;
  constructor(state: any, env: any) {
    this.state = state;
    // `blockConcurrencyWhile()` ensures no requests are delivered until
    // initialization completes.
    this.state.blockConcurrencyWhile(async () => {
      let stored = await this.state.storage.get("value");
      // After initialization, future reads do not need to access storage.
      this.state = stored.data || {};
    });
  }

  async fetch(request) {
    let ip = request.headers.get("CF-Connecting-IP");
    let data = await request.json();
    let storagePromise = this.state.storage.put({
      ip,
      data,
    });
    await storagePromise;
    return new Response(ip + " stored " + data);
  }
}