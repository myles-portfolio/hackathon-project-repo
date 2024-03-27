class EventEmitter {
	private events: Record<string, Function[]> = {};

	// Subscribe to an event
	on(event: string, listener: Function) {
		if (!this.events[event]) {
			this.events[event] = [];
		}
		this.events[event].push(listener);
	}

	// Emit an event, calling all listeners subscribed to it
	emit(event: string, ...args: any[]) {
		if (this.events[event]) {
			this.events[event].forEach((listener) => listener(...args));
		}
	}

	// Remove a specific listener from an event
	off(event: string, listenerToRemove: Function) {
		if (!this.events[event]) return;
		this.events[event] = this.events[event].filter(
			(listener) => listener !== listenerToRemove
		);
	}
}

export const eventEmitter = new EventEmitter();
