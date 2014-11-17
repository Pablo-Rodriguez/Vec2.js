var testOutput = document.getElementById('testOutput');
var u = new Vec2(0,0);
var v = new Vec2(1,0);
var w = new Vec2(1,2);

test('Constructor tests', function() {
	assert(u.equals({x: 0, y: 0}), 'creating (0, 0)');
	assert(v.equals({x: 1, y: 0}), 'creating (1, 0)');
	assert(w.equals({x: 1, y: 2}), 'creating (1, 2)');
}, true);

u.set(1, 0);
v.set(0, 1);
w.set(1, 1);

test('Angle tests', function() {
	assert(aprox(u.angle(w), Math.PI / 4, 0.001), 'angle between (1,0) and (1,1) is pi/4');
	assert(aprox(u.opposite().angle(w), Math.PI * 3 / 4, 0.001), 'angle between (-1,0) and (1,1) is 3pi/4');
	assert(aprox(u.opposite().angle(u), Math.PI, 0.001), 'angle between (1, 0) and (-1, 0) is pi');
}, true);

test('Bounce tests', function() {
	assert(aprox(u.set(1, 0).bounce(w).x, v.x, 0.01) && aprox(u.set(1, 0).bounce(w).y, v.y, 0.01), '(1, 0) bouce with (1, 1) = (0, 1)');
	assert(aprox(w.set(1, 1).bounce(v).x, -1, 0.01) && aprox(w.set(1, 1).bounce(v).y, 1, 0.01), '(1, 1) bouce with (0, 1) = (-1, 1)');
}, true);

test('Clear tests', function() {
	assert(u.clear().equals({x: 0, y: 0}), 'clearing a vector turns it into (0,0)');
}, true);

test('Clone tests', function() {
	assert(u.set(1, 0).clone().equals({x: 1, y: 0}), 'Clone of (1, 0) is (1, 0)');
}, true);

test('Distance tests', function() {
	w.set(1, 1);
	assert(aprox(u.distance(w), 1, 0.0001), 'Distance form (1, 0) to (1, 1) is 1');
}, true);

test('Equals tests', function() {
	assert(u.equals({x: 1, y: 0}) === true, '(1, 0) equals to (1, 0)');
}, true);

test('FromPolar tests', function() {
	u.fromPolar(1, Math.PI / 4);
	assert(aprox(u.x, Math.sqrt(2) / 2, 0.0001), 'vec u defined in polar (1, pi / 4) => u.x = sqrt(2) / 2');
	assert(aprox(u.y, Math.sqrt(2) / 2, 0.0001), 'vec u defined in polar (1, pi / 4) => u.y = sqrt(2) / 2');
}, true);

test('Length tests', function() {
	assert(aprox(w.length(), Math.sqrt(2), 0.001), 'Length 0f (1, 1) is sqrt(2)');
	assert(aprox(w.opposite().length(), Math.sqrt(2), 0.001), 'Length 0f (-1, -1) is sqrt(2)');
}, true);

test('Less tests', function() {
	assert(u.set(1, 0).less(1, 1).equals({x: 0, y: -1}), '(1, 0) - (1, 1) = (0, -1)');
}, true);

test('Normalize tests', function() {
	u.set(1, 0);
	assert(aprox(u.normalize(2).x, 2, 0.0001) && aprox(u.normalize(2).x, 2, 0.0001), 'vec u (1, 0) with length = 2 is (2, 0)');
	assert(aprox(w.normalize().x, Math.sqrt(2) / 2, 0.0001) && aprox(w.normalize().x, Math.sqrt(2) / 2, 0.0001),
		'(1, 1) normalized is (sqrt(2) / 2, sqrt(2) / 2)');
}, true);

test('Opposite tests', function() {
	u.set(1, 0);
	assert(u.opposite().equals({x: -1, y: 0}), 'Opposite of (1,0) is (-1, 0)');
}, true);

test('Perp tests', function() {
	assert(u.set(1, 0).perp().equals({x: 0, y: 1}), '(1, 0) turn pi / 2 anticlock = (0, 1)');
	assert(u.set(1, 0).perp(false).equals({x: 0, y: -1}), '(1, 0) turn pi / 2 clock = (0, -1)');
}, true);

test('Plus tests', function() {
	assert(u.set(1, 0).plus(1, 1).equals({x: 2, y: 1}), '(1, 0) + (1, 1) = (2, 1)');
}, true);

test('Rotate tests', function() {
	assert(aprox(u.set(1, 0).rotate(Math.PI / 4).angle(), Math.PI / 4, 0.001), '(1, 0) rotated pi / 4 has an angle of pi / 4 rads');
	assert(aprox(w.set(1, 1).rotate(-Math.PI / 4).angle(), 0, 0.001), '(1, 1) rotated -pi / 4 has an angle of 0 rads');
}, true);

test('ScalarProduct tests', function() {
	assert(u.set(1, 0).scalarProduct(w.set(2,3)) === 2 ,'(1, 0) · (2, 3) = 2');
	assert(u.set(1, 1).scalarProduct(w.set(2,-3)) === -1 ,'(1, 1) · (2, -3) = -1');
}, true);

test('Scale tests', function() {
	assert(u.set(1, 2).scale(w.set(2, 1)).equals({x: 2, y: 2}), '(1, 2) scale by a (2, 1) vector is (2, 2)');
}, true);

test('Set tests', function() {
	assert(u.set(new Vec2(1, 0)).equals({x: 1, y: 0}), 'seting to (1, 0)');
	assert(v.set(0, 1).equals({x: 0, y: 1}), 'seting to (1, 0)');
	assert(w.set(1, 1).equals({x: 1, y: 1}), 'seting to (1, 0)');
}, true);

test('Symmetric tests', function() {
	assert(aprox(u.set(1, 0).symmetric(w).x, 0, 0.01) && aprox(u.set(1, 0).symmetric(w).y, -1, 0.01), '(1, 0) symmetric with (1, 1) = (0, -1)');
}, true);

test('Simplyfy tests', function() {
	assert(u.set(1, 0).simplify().equals === undefined && u.simplify().x === 1 && u.simplify().y === 0, 'A simplified vector has no methods but the same value');
}, true);

// test(' tests', function() {}, true);