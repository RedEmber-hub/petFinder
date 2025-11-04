export interface PaginationProps {
  totalItems: number; // общее количество элементов (для расчёта страниц)
  itemsPerPage: number; // сколько элементов показывать на одной странице
  currentPage: number; // текущая страница
  onPageChange: (page: number) => void; // колбек при смене страницы
}
