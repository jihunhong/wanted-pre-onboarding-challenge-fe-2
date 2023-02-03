/**
 * @author Jihun Hong <redgee49@gmail.com>
 */

/**
 * Todo type
 * @typedef {Object} TodoType
 * @property {string} title param.required - Todo의 제목
 * @property {string} content param.required - Todo의 내용
 * @property {boolean} isFinish param.required - Todo의 완료여부
 * @property {(string|string[])} category param.required - Todo의 카테고리, 복수도 가능
 * @property {(string|string[])} [tags] - Todo의 태그, 복수도 가능
 */

/**
 * Todo constructor
 * @constructor
 * @class
 * @param {!string} title param.required - Todo의 제목
 * @param {!string} content param.required - Todo의 내용
 * @param {!boolean} isFinish param.required - Todo의 완료여부
 * @param {(string|string[])} category param.required - Todo의 카테고리, 복수도 가능
 * @param {(string|string[])} [tags] - Todo의 태그, 복수도 가능
 * @returns {TodoType} Todo
 */
function Todo(title, content, isFinish, category, tags) {}

/**
 * Todo로 이루어질 ListType
 * @typedef {Todo[]} ListType
 */

/**
 * List constructor
 * @constructor
 * @class
 * @param {Todo[]} [items]
 * @returns {ListType} List
 */
function List(items) {}

/**
 * List에 할일(todo) 추가
 * @abstract
 * @param {Todo} item
 * @return {Promise<List>}
 */
List.prototype.create = function ({ ...item }) {};

/**
 * 옵셔널로 두고 있을때는 특정 하나만 조회하도록하고 없을때는 전체리스트를 리턴한다.
 * @abstract
 * @param {number} [id] id를 플래그로 사용한다.
 * @return {Promise<Todo>|Promise<List>}
 */
List.prototype.read = function (id) {};

/**
 * 특정 할일의 특정태그를 수정할때 이용
 * @typedef {Object} tagUpdateParameter
 * @property {string|string[]} tag
 */

/**
 *
 * @typedef {Object} updateParameter
 * @property {string} [title] optional 가능
 * @property {string} [content] optional 가능
 * @property {boolean} [isFinish] optional 가능
 * @property {(string|string[])} [category] optional 가능
 * @property {(string|string[])} [tags] optional 가능
 */
/**
 * 요구사항을 봐선 List를 리턴할 필요는 없어보임
 * @abstract
 * @param {tagUpdateParameter|updateParameter} parameter
 * @return {Promise<Todo>}
 */
Todo.prototype.update = function (parameter) {};

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다. 모든 할 일을 제거할 수 있다.
 * @abstract
 * @param {id} id
 * @return {void}
 */
List.prototype.delete = function () {};

/**
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @abstract
 * @param {string} [tag] 태그가 쓰인다면 특정태그만 삭제하고 param이 비어있다면 모든 태그를 삭제한다.
 * @return {Promise<List>}
 */
Todo.prototype.delete = function () {};
