from django.urls import path
from .views import get_notes, create_note, update_note

urlpatterns = [
    path('notes/', get_notes, name='get_notes'),
    path('notes/create/', create_note, name='create_note'),
    path('notes/<int:pk>/', update_note, name='update_note'),
]